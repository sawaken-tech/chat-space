# README


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :chats

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :chats

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|messages|text||
|images|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
