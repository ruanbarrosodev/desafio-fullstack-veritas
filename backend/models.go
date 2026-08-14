package main

type Task struct {
	ID               int    `json:"id"`
	Title            string `json:"title"`
	Description      string `json:"description"`
	TitleColor       string `json:"titleColor"`
	DescriptionColor string `json:"descriptionColor"`
	CardColor        string `json:"cardColor"`
	Status           string `json:"status"`
}