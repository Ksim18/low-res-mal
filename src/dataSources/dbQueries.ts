export const installExtension = `
	create extension if not exists "uuid-ossp";
`;

export const titleStatusType = `do $$ begin
create type title_status as enum ('announced', 'airing', 'finished');
exception
when duplicate_object then null;
end $$;
`;
export const genresType = `do $$ begin
create type genre as enum ('action', 'comedy', 'fantasy', 'romance', 'slice_of_life');
exception
when duplicate_object then null;
end $$;
`;
export const progressType = `do $$ begin
create type progress as enum ('completed', 'in_progress', 'dropped', 'plan_to_watch');
exception
when duplicate_object then null;
end $$;
`;

export const createUsers = `create table if not exists users(
	id serial primary key,
	username text not null,
	password text not null,
	age int,
	city text,
);`;

export const createAnime = `create table if not exists anime(
	id serial primary key,
	title text not null,
	studio text not null,
	avg_score float not null CHECK(avg_score>=0 and avg_score<=10) ,
	genre text[] not null,
	start_year date,
	end_year date,
	status title_status not null
);`;

export const createAnimeListRecord = `create table if not exists anime_list(
	id serial primary key,
	title_id int not null,
	user_id int not null,
	score int CHECK(score>=0 and score<=10) ,
	progress progress not null,
	foreign key (title_id) references anime(id),
	foreign key (user_id) references users(id)
);`;

export const createGoogleAuth = `create table if not exists google_auth(
	id uuid primary key default uuid_generate_v4(),
	identifier text not null,
	email text not null,
	constraint fk_user foreign key(id) references users(id)
);`;

export const createGithubAuth = `create table if not exists github_auth(
	id uuid primary key default uuid_generate_v4(),
	identifier text not null,
	email text not null,
	constraint fk_user foreign key(id) references users(id)
);`;

export const createDiscordAuth = `create table if not exists discord_auth (
	id uuid primary key default uuid_generate_v4(),
	email text not null,
	identifier text not null,
	constraint fk_user foreign key(id) references users(id)	
);`;
export const createQuiz = `create table if not exists quiz (
	id uuid default uuid_generate_v4() primary key,
	title text not null,
	author uuid not null,
	private boolean default false,
	tags text[],
	constraint fk_author foreign key(author) references users(id)
);`;

export const createRound = `create table if not exists rounds (
	id serial primary key,
	quiz uuid,
	round_number integer not null check (round_number > 0),
	constraint fk_quiz foreign key(quiz) references quiz(id)
);`;

export const createQuestionType = `
do $$ begin
	create type question_type as enum ('text', 'image', 'audio');
exception
	when duplicate_object then null;
end $$;`;

export const createQuestions = `create table if not exists questions (
	id serial primary key,
	question text not null,
	answer text not null,
	round integer not null,
	cost integer not null check (cost > 0),
	topic text not null,
	type question_type,
	file_path text,
	constraint fk_round foreign key(round) references rounds(id)
);`;
