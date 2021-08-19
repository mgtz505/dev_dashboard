import React, { useState ,useEffect } from 'react';
import axios from "axios";
import { Octokit } from "@octokit/core"

const URL = "https://api.github.com/users/mgtz505";
const KEY = process.env.REACT_APP_GH_KEY;

const GitHub = () => {
    const[ghData, setGhData] = useState()

    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({auth: KEY })

    useEffect(() => {
        const owner = "mgtz505"
        const repo = "project_euler"
        const perPage = 5;

        const fiveMostRecentCommits = octokit.request(
            `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
            ).then((response) => {
                console.log(response.data)
                setCommits(response.data);
            });

    },[])

    console.log(commits)
    const getGitHubData = () => {
        axios.get(URL)
        .then((response => {
            console.log(response);
            setGhData(response.data)
        }))
    }

    return (
        <div className="widgit">
            <h2>GitHub</h2>
            <button onClick={() => getGitHubData()}>Get GH Data</button>
            <a target="blank" href={commits[0].author.html_url}>Commits from {commits[0].author.login}</a>
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
        </div>
    );
};

export default GitHub;