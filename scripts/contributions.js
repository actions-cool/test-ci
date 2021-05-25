const { Octokit } = require('@octokit/rest');
const { writeFileSync } = require('fs');

async function run() {
  const token = '';
  const octokit = new Octokit({ auth: `token ${token}` });

  async function queryContributions(page = 1) {
    let { data: contributions } = await octokit.repos.listContributors({
      owner: 'antvis',
      repo: 'G2Plot',
      per_page: 100,
      page,
    });

    if (contributions.length >= 100) {
      contributions = contributions.concat(await queryContributions(page +1))
    }
    return contributions;
  }

  const contributions = await queryContributions();
  // console.log(contributions)
  // console.log(contributions.length);


  let b = ''
  contributions.forEach(o => {
    b += `
<a href="${o.html_url}" title="${o.login}">
  <img src="${o.avatar_url}" width="50" />
</a>`
  })

  writeFileSync('./README.md', b);
};

run();
