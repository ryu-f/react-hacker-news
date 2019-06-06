import React from 'react'
import * as Rx from 'typeless/rx'
import { useModule, createEpic, createReducer } from 'typeless'

const fetchArticle = (parameter: any) => {
  const fetched = fetch(`https://api.hackerwebapp.com/${parameter}`)
    .then(res => res.json())
  return Rx.fromPromise(fetched)
}

const epic = createEpic()

const initialState = {
  articles: []
}