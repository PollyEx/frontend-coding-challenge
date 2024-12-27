const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: `your_personal_access_token` });

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
