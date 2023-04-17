#! /bin/bash

if [[ $1 == "test" ]]; then # if first argument is "test" conect to test database
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=zoran --dbname=worldcup -t --no-align -c"
fi

# start with clean tables
# echo the result of the command
echo $($PSQL "TRUNCATE TABLE games, teams;")
echo $($PSQL "ALTER SEQUENCE teams_team_id_seq RESTART WITH 1;")
echo $($PSQL "ALTER SEQUENCE games_winner_id_seq RESTART WITH 1;")
echo $($PSQL "ALTER SEQUENCE games_opponent_id_seq RESTART WITH 1;")
echo $($PSQL "ALTER SEQUENCE games_game_id_seq RESTART WITH 1;")

# read games.csv
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS; do

  if [[ $YEAR != 'year' ]]; then # skip the title line in csv file

    #--------------------------------------- teams table
    # get team_id from teams table
    TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT';")

    # test if $TEAM_ID is empty string
    if [[ -z $TEAM_ID ]]; then
      # insert team name and store the status code
      INSERT_OPPONENT_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT');")
      # display customized status code
      if [[ $INSERT_OPPONENT_RESULT == 'INSERT 0 1' ]]; then
        echo "inserted into teams: $OPPONENT"
      fi
      # This block will try to add duplicates but teams(name) have unique constraint
      # How to optimize? check for duplicates before query? if value in table skip
      # solution given by chatgpt - "on conflict do nothing"
      INSERT_WINNER_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER') ON CONFLICT DO NOTHING;")
      echo $INSERT_WINNER_RESULT

    fi
  fi
done
echo '-- teams table completed --'

# ---------------------------------------- games table
echo '-- start with games table --'
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS; do

  # get data from the database
  WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
  OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")

  # insert data into games table
  GAMES_RESULT=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES('$YEAR', '$ROUND', '$WINNER_ID', '$OPPONENT_ID', '$WINNER_GOALS', '$OPPONENT_GOALS');")

  # exit status
  if [[ $GAMES_RESULT == 'INSERT 0 1' ]]; then
    echo 'game entry successful'
  fi

done

echo '-- teams table completed --'

# TRUNCATE TABLE games, teams;
# ALTER SEQUENCE teams_team_id_seq RESTART WITH 1;

#   create database dump so you can recreate it elsewhere
# pg_dump -cC --inserts -U zoran worldcup > worldcup.sql

# to prevent duplicate entries, add unique constraint to table column
# you can also append "ON CONFLICT DO NOTHING" at the end of INSERT statement
