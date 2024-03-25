from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from gptservice import apps


@api_view(['POST'])
def chatassistant(request):
    message = request.data.get('message')  # Get the 'message' input from the request data
    if message:
        response = apps.call_assistant(message)  # Call the 'call_assistant' method with the message input
        return Response({'message': response})
    else:
        return Response({'message': 'No message provided.'})

