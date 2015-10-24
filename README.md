# inin-der-chat
Chat room

## Folder Structure

- `assets` for client side raw javascript, scss, etc.
- `public` for all files that are accessible from browser

## Server API

### Locations
Fetch all avaliable locations. Parameter `location` in other api should be a valid `id` of locations.

**URL** `/locations`

**Response** `Object[id:String => name:String]`


### Users
Fetch all current users. Parameter `user_id` in other api should be a valid `id` of users.

**URL** `/users`

**Response** `Object[id:String => data:UserDataObject]`



## Server Socket Event

### Login
The user must login before using other api.

**Event** `login`

**Parameter** `Object{name:String, height:Number?, weight:Number?, age:Number?, location:String}`

**Response Event** `login_result`


### Update profile (includes location)

Update the user data.

**Event** `profile`

**Parameter** `Object{name:String?, height:Number?, weight:Number?, age:Number?, location:String?}`

**Response Event** `profile_result`


### Set interested location channels

Set the location channels for receiving public messages.

**Event** `channels`

**Parameter** `Array[String]`

**Response Event** `channels_result`


### Send public messages

Send public messages to the location channel.

**Event** `public_message`

**Parameter** `Object{message:String}`

**Response Event** `public_message_result`


### Send private messages

Send private messages to a specific user.

**Event** `private_message`

**Parameter** `Object{user_id:String, message:String}`

**Response Event** `private_message_result`

