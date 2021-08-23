import React, { useState } from 'react';
import axios from "axios";

const URL = () => {

const getShortenedURL = () => {

    const address = "https://t.ly/api/v1/link/shorten"

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    let body = {
        "long_url": "https://github.com/mochajs/mocha/wiki/compilers-deprecation#what-should-i-use-instead-then"
        // "domain": "https:\/\/t.ly\/"
    }
    fetch(address, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => console.log(json));
}


    return (
        <div className="widgit">
            <h2>URL Shortener</h2>
        <button onClick={getShortenedURL}>X</button>
        </div>
    );
};

export default URL;