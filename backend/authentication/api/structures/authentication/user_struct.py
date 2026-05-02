import msgspec


class UserStruct(msgspec.Struct):
    id: int
    email: str
    first_name: str
    last_name: str
    profile_photo: str
