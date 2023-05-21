import Link from "next/link";
async function fetchRepoContents(name){
  await new Promise((resolve) => setTimeout(resolve,3000));
  const contents = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`,{
    next:{
        revalidate: 60,
    }
});
  
  return await contents.json();
}


const RepoDirs = async ({name}) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(content => content.type === 'dir');
    return (
      <>
        <h3>Directories</h3>
        <ul>
          {
            dirs.map((dir)=> (
              <li key = {dir.path}>
                <Link href={dir.html_url}>
                  {dir.path}
                </Link>
              </li>
            ))
          }
        </ul>
      </>
    )   
  }
  
export default RepoDirs