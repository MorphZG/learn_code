--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg22.10+1)
-- Dumped by pg_dump version 15.1 (Ubuntu 15.1-1.pgdg22.10+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: zoran
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';


ALTER DATABASE worldcup OWNER TO zoran;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: zoran
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying(20) NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO zoran;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: zoran
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO zoran;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: zoran
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: games_opponent_id_seq; Type: SEQUENCE; Schema: public; Owner: zoran
--

CREATE SEQUENCE public.games_opponent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_opponent_id_seq OWNER TO zoran;

--
-- Name: games_opponent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: zoran
--

ALTER SEQUENCE public.games_opponent_id_seq OWNED BY public.games.opponent_id;


--
-- Name: games_winner_id_seq; Type: SEQUENCE; Schema: public; Owner: zoran
--

CREATE SEQUENCE public.games_winner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_winner_id_seq OWNER TO zoran;

--
-- Name: games_winner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: zoran
--

ALTER SEQUENCE public.games_winner_id_seq OWNED BY public.games.winner_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: zoran
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.teams OWNER TO zoran;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: zoran
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO zoran;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: zoran
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: games winner_id; Type: DEFAULT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games ALTER COLUMN winner_id SET DEFAULT nextval('public.games_winner_id_seq'::regclass);


--
-- Name: games opponent_id; Type: DEFAULT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games ALTER COLUMN opponent_id SET DEFAULT nextval('public.games_opponent_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: zoran
--

INSERT INTO public.games VALUES (1, 2018, 'Final', 2, 1, 4, 2);
INSERT INTO public.games VALUES (2, 2018, 'Third Place', 4, 3, 2, 0);
INSERT INTO public.games VALUES (3, 2018, 'Semi-Final', 1, 3, 2, 1);
INSERT INTO public.games VALUES (4, 2018, 'Semi-Final', 2, 4, 1, 0);
INSERT INTO public.games VALUES (5, 2018, 'Quarter-Final', 1, 5, 3, 2);
INSERT INTO public.games VALUES (6, 2018, 'Quarter-Final', 3, 7, 2, 0);
INSERT INTO public.games VALUES (7, 2018, 'Quarter-Final', 4, 9, 2, 1);
INSERT INTO public.games VALUES (8, 2018, 'Quarter-Final', 2, 11, 2, 0);
INSERT INTO public.games VALUES (9, 2018, 'Eighth-Final', 3, 13, 2, 1);
INSERT INTO public.games VALUES (10, 2018, 'Eighth-Final', 7, 15, 1, 0);
INSERT INTO public.games VALUES (11, 2018, 'Eighth-Final', 4, 17, 3, 2);
INSERT INTO public.games VALUES (12, 2018, 'Eighth-Final', 9, 19, 2, 0);
INSERT INTO public.games VALUES (13, 2018, 'Eighth-Final', 1, 21, 2, 1);
INSERT INTO public.games VALUES (14, 2018, 'Eighth-Final', 5, 23, 2, 1);
INSERT INTO public.games VALUES (15, 2018, 'Eighth-Final', 11, 25, 2, 1);
INSERT INTO public.games VALUES (16, 2018, 'Eighth-Final', 2, 27, 4, 3);
INSERT INTO public.games VALUES (17, 2014, 'Final', 38, 27, 1, 0);
INSERT INTO public.games VALUES (18, 2014, 'Third Place', 29, 9, 3, 0);
INSERT INTO public.games VALUES (19, 2014, 'Semi-Final', 27, 29, 1, 0);
INSERT INTO public.games VALUES (20, 2014, 'Semi-Final', 38, 9, 7, 1);
INSERT INTO public.games VALUES (21, 2014, 'Quarter-Final', 29, 31, 1, 0);
INSERT INTO public.games VALUES (22, 2014, 'Quarter-Final', 27, 4, 1, 0);
INSERT INTO public.games VALUES (23, 2014, 'Quarter-Final', 9, 13, 2, 1);
INSERT INTO public.games VALUES (24, 2014, 'Quarter-Final', 38, 2, 1, 0);
INSERT INTO public.games VALUES (25, 2014, 'Eighth-Final', 9, 33, 2, 1);
INSERT INTO public.games VALUES (26, 2014, 'Eighth-Final', 13, 11, 2, 0);
INSERT INTO public.games VALUES (27, 2014, 'Eighth-Final', 2, 35, 2, 0);
INSERT INTO public.games VALUES (28, 2014, 'Eighth-Final', 38, 37, 2, 1);
INSERT INTO public.games VALUES (29, 2014, 'Eighth-Final', 29, 19, 2, 1);
INSERT INTO public.games VALUES (30, 2014, 'Eighth-Final', 31, 39, 2, 1);
INSERT INTO public.games VALUES (31, 2014, 'Eighth-Final', 27, 15, 1, 0);
INSERT INTO public.games VALUES (32, 2014, 'Eighth-Final', 4, 41, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: zoran
--

INSERT INTO public.teams VALUES (1, 'Croatia');
INSERT INTO public.teams VALUES (2, 'France');
INSERT INTO public.teams VALUES (3, 'England');
INSERT INTO public.teams VALUES (4, 'Belgium');
INSERT INTO public.teams VALUES (5, 'Russia');
INSERT INTO public.teams VALUES (7, 'Sweden');
INSERT INTO public.teams VALUES (9, 'Brazil');
INSERT INTO public.teams VALUES (11, 'Uruguay');
INSERT INTO public.teams VALUES (13, 'Colombia');
INSERT INTO public.teams VALUES (15, 'Switzerland');
INSERT INTO public.teams VALUES (17, 'Japan');
INSERT INTO public.teams VALUES (19, 'Mexico');
INSERT INTO public.teams VALUES (21, 'Denmark');
INSERT INTO public.teams VALUES (23, 'Spain');
INSERT INTO public.teams VALUES (25, 'Portugal');
INSERT INTO public.teams VALUES (27, 'Argentina');
INSERT INTO public.teams VALUES (29, 'Netherlands');
INSERT INTO public.teams VALUES (31, 'Costa Rica');
INSERT INTO public.teams VALUES (33, 'Chile');
INSERT INTO public.teams VALUES (35, 'Nigeria');
INSERT INTO public.teams VALUES (37, 'Algeria');
INSERT INTO public.teams VALUES (38, 'Germany');
INSERT INTO public.teams VALUES (39, 'Greece');
INSERT INTO public.teams VALUES (41, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: zoran
--

SELECT pg_catalog.setval('public.games_game_id_seq', 32, true);


--
-- Name: games_opponent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: zoran
--

SELECT pg_catalog.setval('public.games_opponent_id_seq', 1, false);


--
-- Name: games_winner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: zoran
--

SELECT pg_catalog.setval('public.games_winner_id_seq', 1, false);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: zoran
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 42, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zoran
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

