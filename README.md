# README


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|
|mail|string|null: false, unique:true|
|password|string|null: false, unique:true|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :chats

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :chats

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|messages|text||
|images|string||
|time|timestamps|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
