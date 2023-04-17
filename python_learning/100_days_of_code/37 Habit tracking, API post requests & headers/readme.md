**day 37**

# Habit tracking, API post requests & headers

## Introduction

Advanced authentication and POST / PUT / DELETE requests will be the first lesson.  
I will need these requests to build the habit tracker using pixela web API.  
To fetch the data from the server we use `requests.get()`.  
For other type of requests we use different methods:  

- `requests.post()` to save data on server (tweeter post, google sheets...)
- `requests.put()` to update posted data
- `requests.delete()` to delete data

## Create new pixe.la user

Go to [https://pixe.la](https://pixe.la/index.html) and follow the instructions to create the user account.  
Complete documentation is at: [docs.pixe.la](https://docs.pixe.la/). Documentation is user friendly and easy  
to follow. To register new user you can use `curl` over command line or with python  
code and `requests` module. I did it with python and single line of code:  

```python
response = re.post(url=endpoint, json=user_parameters)
print(response.url)  # optional, shows the endpoint url
print(response.text)  # optional, shows the response message
```

After successful user creation you can comment out the code. Next step is to setup  
new graph that will track your habbit.

## Create and configure new graph

After user creation i can configure the graph. Basic coloring, unit of measure (hours, minutes, kilograms,  
kilometers...). I have learned about new parameter, `header`. Request is split in two parts. `header` and  
`body`. Like on paper letter, `header` must specify important user information while `body` holds the rest  
of the request. I have created two dictionaries:  

```python
headers = {
    'X-USER-TOKEN': 123456789,
}
graph_config = {
    'id': 'graph_id',
    'name': 'graph_name',
    'unit': 'minutes',
    'type': 'int',
    'color': 'black',
}

response = re.post(url=endpoint, json=graph_config, headers=headers)
```

It is important to read the API documentation and have the correct key:value pairs. Set the correct  
name for keys but also set the correct type of value. Some values must be strings while others could  
be integers or some other data type.  

## Post value to the graph (Post a pixel)

Since graph is alredy created i can comment out last post request. Set the endpoint url, request header  
and request body. Follow the instructions for key: value pairs. To view the graph with your current  
progress, go to `https://pixe.la/v1/users/<USERNAME>/graphs/<GRAPH_ID>.html`

## Autofill today's date with strftime

Python datetime module can be useful whenever we are working with dates or time :-)  
Since every API usually requests different date formats we should format the output string using  
`strftime` method.  

```python
today = datetime.now()
print(today)

>>> "2022-08-16 13:18:59.096337"

today = datetime.now().strftime('%Y%m%d')
print(today)

>>> "20220816"
```

## HTTP delete and put requests

Update the quantity already registered as a pixel. If target pixel does not exist, create a new pixel  
and set the quantity.

<!-- vid 326-->


## Curl and command line alternative

**Create your user account.**  
Call [/v1/users](https://docs.pixe.la/entry/post-user) API by HTTP POST.

```bash
$ curl -X POST https://pixe.la/v1/users -d '{"token":"thisissecret", "username":"a-know", "agreeTermsOfService":"yes", "notMinor":"yes"}'
>> {"message":"Success.","isSuccess":true}
```

**Create a graph definition.**  
Call [/v1/users/<username>/graphs](https://docs.pixe.la/entry/post-graph) by HTTP POST.

```bash
$ curl -X POST https://pixe.la/v1/users/a-know/graphs -H 'X-USER-TOKEN:thisissecret' -d '{"id":"test-graph","name":"graph-name","unit":"commit","type":"int","color":"shibafu"}'
>> {"message":"Success.","isSuccess":true}
```

**Get the graph!**  
Browse https://pixe.la/v1/users/a-know/graphs/test-graph ! This is also [/v1/users/<username>/graphs/<graphID>](https://docs.pixe.la/entry/post-graph) API.  

![graph image](https://pixe.la/static/img/browse_graph.png)  

**Post value to the graph**  
Call [/v1/users/<username>/graphs/<graphID>](https://docs.pixe.la/entry/post-pixel) by HTTP POST.  

```bash
$ curl -X POST https://pixe.la/v1/users/a-know/graphs/test-graph -H 'X-USER-TOKEN:thisissecret' -d '{"date":"20180915","quantity":"5"}'
>> {"message":"Success.","isSuccess":true}
```

**Browse again!**  
Browse https://pixe.la/v1/users/a-know/graphs/test-graph, again!

![graph image](https://pixe.la/static/img/browse_again.png)

**You can find out more about**  
You can get more information by adding `.html` to the end of the URL on Step.6 at it in your browser!  
`https://pixe.la/v1/users/a-know/graphs/test-graph.html`


#tags: readme,