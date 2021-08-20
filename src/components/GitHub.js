import React, { useState ,useEffect } from 'react';
import { Octokit } from "@octokit/core";
import "../styles/Github.css";
import formatDate from  "./formatDate";

const KEY = process.env.REACT_APP_GH_KEY;

const GitHub = () => {
    const [callAPI, setCallAPI] = useState(false);
    const [repoName, setRepoName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({auth: KEY });

    useEffect(() => {
        const owner = "mgtz505"
        console.log("This is the repoName:", repoName)
        const repo = repoName
        console.log("This is the repo variable:", repo)
        const perPage = 10;
        
        if(repoName && callAPI){

            const fiveMostRecentCommits = octokit.request(
                `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
                ).then((response) => {
                    console.log(response.data)
                    setCommits(response.data);
                    setCallAPI(false);
                    setDisplayName(repoName);
                    // setRepoName("");
                    
                });
        }
    },[callAPI])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!repoName)return
        setCallAPI(true);
        // setRepoName("")
    }

    // const formatDate = (str) => {
    // let pivot = str.indexOf("T")
    // let end = str.indexOf("Z")
    // const date = str.slice(0,pivot)
    // const time = str.slice(pivot + 1,end)
    // return [date,time]
    // }
    


    console.log(displayName);

    return (
        <div className="widgit">
            <h2>GitHub Commit Buddy</h2>
            {/* <h3>{repoName}</h3> */}
           
            {/* {commits ? <a target="blank" href={commits[0].author.html_url}>Commits from {commits[0].author.login}</a> : null} */}
            <div className="input-field">
                <form
                onSubmit={handleSubmit}
                type="submit">
                    <input
                    className = "repo-input" 
                    placeholder="Type Repo Name..."
                    type="text"
                    value={repoName}
                    onChange={(e => setRepoName(e.target.value))}
                    >
                    </input>
                </form>
            </div>
                {commits.length > 1 && displayName ? <h4>10 Most Recent Commits for {displayName}</h4> : null }
            <ul className="commit-list">
               <div>
               {commits.map(commit => (
                   <div className="commit-card">
                   <li key={commit.id}>
                       <p className="commit-text">{commit.author.login}: {commit.commit.message}</p>
                       
                       <h5>Commit Date: {formatDate(commit.commit.author.date)[0]}</h5>
                       <h5>Commit Time: {formatDate(commit.commit.author.date)[1]}</h5>
                       <a target="blank" href={commit.html_url}>See Commit</a>
                    </li>
                </div>
               ))}
               </div>
            </ul>
                <button className="function-button" onClick={() => setCallAPI(true)}>🔄</button>
        </div>
    );
};

export default GitHub;