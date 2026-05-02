import msgspec

from authentication.api.structures.authentication.user_struct import UserStruct
from authentication.models import User


class UserStructuredSerializer:
    """
    Takes in the Django User Model, convenrts it to a UserStruct and then
    converts that to JSON saft python data for the DRF response.
    """

    def __init__(self, user: User) -> None:
        self.user = user

    @property
    def data(self) -> dict[str, object]:
        return msgspec.json.decode(msgspec.json.encode(self.serialize()))

    def serialize(self) -> UserStruct:
        return UserStruct(
            id=self.user.id,
            email=self.user.email,
            first_name=self.user.first_name,
            last_name=self.user.last_name,
            profile_photo=self.user.profile_photo,
        )
