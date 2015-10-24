# inin-der-chat
Chat room

## Folder Structure

- `assets` for client side raw javascript, scss, etc.
- `public` for all files that are accessible from browser


## Data Structure

### UserDataObject

This is an object of format `Object{name:String, height:Number?, weight:Number?, age:Number?, location:String}`


## Server API

### Locations
Fetch all available locations. Parameter `location` in other api should be a valid `id` of locations.

**URL** `/locations`

**Response** `Object[id:String => name:String]`


### Users
Fetch all current users. Parameter `user_id` in other api should be a valid `id` of users.

**URL** `/users`

**Response** `Object[id:String => data:UserDataObject]`



## Server Socket Events

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



## Client Socket Events

### Result: Login

`result` is available if `success` is `true`

**Event** `login_result`

**Parameter** `Object{success:Bool, result:UserDataObject}`


### Result: Update profile (includes location)

`result` is available if `success` is `true`

**Event** `profile_result`

**Parameter** `Object{success:Bool, result:UserDataObject}`


### Result: Set interested location channels

`result` is available if `success` is `true`

**Event** `channels_result`

**Parameter** `Object{success:Bool, result:Array[String]}`


### Result: Send public messages

`result` is available if `success` is `true`

**Event** `public_message_result`

**Parameter** `Object{success:Bool, result:Object{message:String}}`


### Result: Send private messages

`result` is available if `success` is `true`.
`user_id` is the target user id.

**Event** `private_message_result`

**Parameter** `Object{success:Bool, result:Object{user_id:String, message:String}}`


### User enter

A user enters the chatroom.

**Event** `user_enter`

**Parameter** `UserDataObject`


### User leave

A user leaves the chatroom.

**Event** `user_leave`

**Parameter** `user_id:String`


### User profile updated (including location updated)

A user updates profile.

**Event** `user_profile`

**Parameter** `UserDataObject`


### Receive public message

A user sends public message. `user_id` is the sender id.

**Event** `public_message`

**Parameter** `Object{user_id:String, message:String}`


### Receive private message

A user sends private message to you. `user_id` is the sender id.

**Event** `public_message`

**Parameter** `Object{user_id:String, message:String}`

