import {Octokit} from '@octokit/core';

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN
 });

async function setupFork(candidateUsername) {
  const repoOwner = 'PollyEx'
  const repoName = 'frontend-coding-challenge'

  await octokit.request('POST /repos/{owner}/{repo}/forks', {
    owner: repoOwner,
    repo: repoName
  });

  await octokit.request('POST /repos/{owner}/{repo}/branches', {
    owner: candidateUsername,
    repo: repoName,
    branch: 'main',
    newBranch: `candidate-${candidateUsername}`,
  });
  
  console.log(`Fork setup completed for ${candidateUsername}!`);
}
