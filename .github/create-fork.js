import {Octokit} from '@octokit/core';

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN
 });

async function setupFork(candidateUsername) {
  const repoOwner = 'PollyEx'
  const repoName = 'frontend-coding-challenge'

  await octokit.request('POST /repos/{owner}/{repo}/forks', {
    owner: repoOwner,
    repo: repoName,
    name: `${repoName}-${candidateUsername}`,
    default_branch_only: true
  });
  
  console.log(`Fork setup completed for ${candidateUsername}!`);
}

setupFork(process.argv[2]);