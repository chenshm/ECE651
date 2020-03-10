from django.test import TestCase
from .models import *
from rest_framework import status
from django.urls import include, path, reverse
from rest_framework.test import APITestCase, URLPatternsTestCase
class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title='first todo')
        Todo.objects.create(description='a description here')

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'first todo')

    def test_description_content(self):
        todo = Todo.objects.get(id=2)
        expected_object_name = f'{todo.description}'
        self.assertEquals(expected_object_name, 'a description here')

class CustomerTests(APITestCase):


    def test_create_customer(self):
        """
        Ensure we can create a new account object.
        """
        Customer.objects.create(first_name="baozi",last_name="emperor",email="middle_south_sea@china.cn",phone="10086")
        url = reverse('customers_list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        #self.assertEqual(len(response.data['data']), 1)
        #self.assertEqual(response.data['data'][0]['first_name'], "baozi")
        #print(response.data['data'][0])