import React, { useState ,useEffect } from 'react';
import { Octokit } from "@octokit/core"
import { DomHandler } from 'htmlparser2';

// const URL = "https://api.github.com/users/mgtz505";
const KEY = process.env.REACT_APP_GH_KEY;

const GitHub = () => {
    const [callAPI, setCallAPI] = useState(false);
    const [repoName, setRepoName] = useState("");
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({auth: KEY });

    useEffect(() => {
        const owner = "mgtz505"
        console.log("This is the repoName:", repoName)
        const repo = repoName
        console.log("This is the repo variable:", repo)
        const perPage = 5;
        
        if(repoName && callAPI){

            const fiveMostRecentCommits = octokit.request(
                `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
                ).then((response) => {
                    console.log(response.data)
                    setCommits(response.data);
                });
        }
    },[callAPI])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!repoName)return
        setCallAPI(!callAPI);
        // setCallAPI(false);
    }

    console.log(commits)
    console.log(repoName)
    console.log(callAPI)

    return (
        <div className="widgit">
            <h2>GitHub Commit Buddy</h2>
            <h3>{repoName}</h3>
           
            {/* {commits ? <a target="blank" href={commits[0].author.html_url}>Commits from {commits[0].author.login}</a> : null} */}
            <ul>
                <h4>Commits For </h4>
               {commits.map(commit => (
                   <>
                   <li key={commit.id}>
                       {commit.author.login}: {commit.commit.message}
                    </li>
                       
                       <a target="blank" href={commit.parents[0].html_url}>Link</a>
                </>
               ))}
            </ul>
            <form
            onSubmit={handleSubmit}
            type="submit">
                <input 
                placeholder="Repo Name"
                type="text"
                value={repoName}
                onChange={(e => setRepoName(e.target.value))}
                >
                </input>
            </form>
        </div>
    );
};

export default GitHub;