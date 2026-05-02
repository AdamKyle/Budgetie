from rest_framework import status, viewsets
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from authentication.api.requests.register_user_request import RegisterUserRequest
from authentication.api.structured_serializers.authentication.authentication_response_structured_serializer import (
    AuthenticationResponseStructuredSerializer,
)
from authentication.models import User


class RegistrationViewSet(viewsets.GenericViewSet):
    permission_classes = [AllowAny]

    def create(self, request: Request) -> Response:
        register_user_request = RegisterUserRequest(request.data)
        validated_data = register_user_request.validate()

        user = User.objects.create_user(**validated_data)
        refresh_token = RefreshToken.for_user(user)

        serializer = AuthenticationResponseStructuredSerializer(
            user=user,
            access=str(refresh_token.access_token),
            refresh=str(refresh_token),
        )

        return Response(serializer.data, status=status.HTTP_201_CREATED)
