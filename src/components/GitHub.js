import React, { useState ,useEffect } from 'react';
import { Octokit } from "@octokit/core";
import "../styles/Github.css";
import formatDate from  "./formatDate";
import ModalContainer from "./ModalContainer";

const KEY = process.env.REACT_APP_GH_KEY;

const GitHub = () => {
    const [callAPI, setCallAPI] = useState(false);
    const [repoName, setRepoName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({auth: KEY });

const description="Type in the name of one of your repo's names and see your ten most recent commits, including timestamps as well as a link to the commit on Github."
const details = ["Coming Soon: O-auth!", "Your list of repos can be refreshed by clicking 🔄", "The main text body will be your commit message"]

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
        
    }

    console.log(displayName);

    return (
        <div className="widgit-tall">
            <div className="banner-container">
            <h2>GitHub Commit Buddy</h2>
            </div>
           <ModalContainer title="GitHub Commit Buddy" header="Quickly see and access your projects' commits" description={description} details={details}/>
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
                   
                {commits.length > 1 && displayName ? (
                <>
                <h3>Displaying 10 Most Recent Commits for {displayName}</h3>
                <button className="function-button refresh" onClick={() => setCallAPI(true)}>🔄</button>
                </>
                ) : null }
            <ul className="commit-list">
               <div>
               {commits.map(commit => (
                   <div className="commit-card">
                   <li key={commit.id}>
                       <p className="commit-text">{commit.author.login}: {commit.commit.message}</p>
                       
                       <h5>Commit Date: {formatDate(commit.commit.author.date)[0]}</h5>
                       <h5>Commit Time: {formatDate(commit.commit.author.date)[1]}</h5>
                       <a className="grow" target="blank" href={commit.html_url}>See Commit</a>
                    </li>
                </div>
               ))}
               </div>
            </ul>
        </div>
    );
};

export default GitHub;