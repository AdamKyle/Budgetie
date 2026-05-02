import msgspec

from authentication.api.structures.authentication.user_struct import UserStruct


class AuthenticationResponseStruct(msgspec.Struct):
    access: str
    refresh: str
    user: UserStruct
