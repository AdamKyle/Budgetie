import msgspec

from authentication.api.structured_serializers.authentication.user_structured_serializer import (
    UserStructuredSerializer,
)
from authentication.api.structures.authentication.authentication_response_struct import (
    AuthenticationResponseStruct,
)
from authentication.models import User


class AuthenticationResponseStructuredSerializer:
    """
    Registration endpoint uses this to create the full registration response
    since registration will log you in after you successfuly register.
    """

    def __init__(self, user: User, access: str, refresh: str) -> None:
        self.user = user
        self.access = access
        self.refresh = refresh

    @property
    def data(self) -> dict[str, object]:
        return msgspec.json.decode(msgspec.json.encode(self.serialize()))

    def serialize(self) -> AuthenticationResponseStruct:
        user_serializer = UserStructuredSerializer(self.user)

        return AuthenticationResponseStruct(
            access=self.access,
            refresh=self.refresh,
            user=user_serializer.serialize(),
        )
