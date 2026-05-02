from django.test import TestCase

from authentication.models import User


class UserManagerTest(TestCase):
    def test_create_user_requires_email(self) -> None:
        with self.assertRaisesMessage(ValueError, "Email is required."):
            User.objects.create_user(
                email="",
                password="StrongPassword123!",
                first_name="Test",
                last_name="User",
            )
