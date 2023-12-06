from django.http import JsonResponse
import datetime as datetime
import requests
from rest_framework.decorators import api_view

from news.utils import ErrorResponse
from server.settings import NEWS_API_URL
from server.settings import NEWS_API_KEY


@api_view(['GET'])
def read_news(request):
    try:
        if 'q' not in request.query_params:
            return ErrorResponse('Please provide the \'q\' query param')

        query_q = request.query_params.get('q')
        allowed_q_values = ["apple", "meta", "netflix", "google", "twitter", "tesla"]
        if query_q not in allowed_q_values:
            return ErrorResponse(f'Invalid value for \'q\' query param. Allowed values are: '
                                 f'{", ".join(allowed_q_values)}')

        if 'language' not in request.query_params:
            return ErrorResponse('Please provide the \'language\' query param')
        query_language = request.query_params.get('language')
        allowed_language_values = ["en", "ar"]
        if query_language not in allowed_language_values:
            return ErrorResponse(f'Invalid value for \'language\' query param. Allowed values are: '
                                 f'{", ".join(allowed_language_values)}')
        query_params = {
            'q': request.query_params.get('q'),
            'from': request.query_params.get('from',
                                             (datetime.date.today() - datetime.timedelta(days=7)).strftime("%Y-%m-%d")),
            'page': int(request.query_params.get('page', 1)),
            'pageSize': int(request.query_params.get('pageSize', 100)),
            'sortBy': request.query_params.get('q', 'publishedAt'),
            'language': request.query_params.get('language'),
            'apiKey': NEWS_API_KEY,
        }


        response = requests.get(NEWS_API_URL, params=query_params)
        if response.status_code != 200:
            raise requests.RequestException("Unexpected response received")

        # Relaying the response as instructed without processing
        data = response.json()
        return JsonResponse(data, safe=False)

    except requests.RequestException as e:
        return ErrorResponse(str(e), True)
