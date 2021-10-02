import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({repos_url}) => {

    const [repos, setRepos] = useState([]);
    const feachRepos = async () => {
        const { data } = await axios.get(repos_url);
        setRepos(data);
    }

    useEffect(() => {
        feachRepos();
    }, [repos_url])
    
    return (
        <ListGroup>
            {
                repos.map(repo => (
                    <ListGroupItem key={repo.id}>
                        <div className="text-primary">
                            <a href={repo.html_url} target="_blank" className="repo_url">{repo.name}</a>
                        </div>
                        <div className="text-secondary">{ repo.language }</div>
                        <div className="text-info">{ repo.description }</div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

export default Repos;