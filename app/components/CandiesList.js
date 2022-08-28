import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCandies } from '../slices/candiesSlice'


function CandiesList() {
    const candies = useSelector(state => state.candies)
    const dispatch = useDispatch()
    console.log(candies)
    console.log(candies.candies)

    useEffect(() => {
        dispatch(getCandies())
    }, [])

    return (
        <div>
            <h1>This is the Candies List!</h1>
            {candies.loading && <div>Loading...</div>}
            {!candies.loading && candies.error ? <div>Error: {candies.error}</div>: null}
            {!candies.loading && candies.candies.length ? (
                <ul>
                    {
                        candies.candies.map(candy => (
                            <li key={candy.id}>{candy.name}</li>
                        ))
                    }
                </ul>
            ): null}
        </div>
    )
}

export default CandiesList