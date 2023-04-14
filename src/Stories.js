import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';
import './App.css'


const Stories = () => {
    const { hits, nbPages, isLoading, removePost } = useContext(AppContext);
    // let isLoading = true;
    // const [isLoading, setIsLoading] = useState(true);


    if (isLoading) {
        return <>
            <h1 className='text-center pt-5 mt-5'>Loading...</h1>
        </>
    }
    return (
        <>
          
            {
                hits.map((curPost) => {
                    const { title, author, objectID, url, num_comments } = curPost
                    return (
                        <>
                            <div className='section'>
                                <div className='card'>
                                    <h2>{title}</h2>
                                    <p><span>{author}</span> | <span>{num_comments} comments</span></p>
                                    <div className='card-button'>
                                        <a  href={url} target="_blank">
                                            Read More
                                        </a>
                                        <a className='a1' href="#" onClick={()=>removePost(objectID)}>Remove</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Stories;