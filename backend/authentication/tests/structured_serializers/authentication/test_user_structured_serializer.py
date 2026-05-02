from django.test import TestCase

from authentication.api.structured_serializers.authentication.user_structured_serializer import (
    UserStructuredSerializer,
)
from authentication.models import User


class UserStructuredSerializerTest(TestCase):
    def test_returns_user_data(self) -> None:
        user = User.objects.create_user(
            email="test@example.com",
            password="StrongPassword123!",
            first_name="Test",
            last_name="User",
        )

        serializer = UserStructuredSerializer(user)

        self.assertEqual(
            serializer.data,
            {
                "id": user.id,
                "email": "test@example.com",
                "first_name": "Test",
                "last_name": "User",
                "profile_photo": "",
            },
        )
