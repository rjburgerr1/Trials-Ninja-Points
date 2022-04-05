FROM python:3.9-slim-buster

RUN apt-get update -y

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

CMD ["waitress-serve", "--listen=0.0.0.0:5000", "--url-scheme=https", "app:app"]