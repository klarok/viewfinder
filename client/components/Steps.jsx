const decisionsUrl = 'https://docs.google.com/spreadsheets/d/1ObVQGqm894fzjeM5vcG2qysYKDng4g8rtgyIwS3vJh8/edit#gid=391982378';
const codestitchUrl = 'https://codestitch.io';
const tiDecisionsUrl = 'https://goo.gl/forms/IODn7sw3jtpiUq2n1';
const tiWorkflowUrl = 'https://docs.google.com/document/d/18AJkthUSgu40QUYwQNdQ3B23SIFMVSU5HDr_5bVaCws/edit';

const Steps = ({ candidateName, candidateEmail, currentDate, tlkio, staticTiRows, liveTiRows, suggestedPrompt, copyPrompt, }) => {
  const pastRecordsAvailable = !!(staticTiRows && liveTiRows);
  let allTiRows, isFirstInterview;
  if (pastRecordsAvailable) {
    allTiRows = staticTiRows.concat(liveTiRows);
    isFirstInterview = !allTiRows.length;
  }

  const suggestedPromptLine = (<span>
    <a href="#" id={suggestedPrompt} onClick={copyPrompt}>
      Use {suggestedPrompt}
    </a>, or choose a prompt below. It will save to this month's folder.
  </span>);
  const candidateFirst = candidateName && candidateName.split(' ')[0];

  return (
  <ol>
    {pastRecordsAvailable ?
      (isFirstInterview ?
        <li>It's {candidateFirst}'s first scheduled interview! {suggestedPromptLine}</li> :
        <li>All previous interviews by {candidateFirst} in the <a href={decisionsUrl} target="_blank">Technical Interview Decisions</a> spreadsheet:
          <ul>
            {allTiRows.map(str => <li key={str}>{str}</li>)}
            <li>{suggestedPromptLine}</li>
          </ul>
        </li>
      ) :
      <li>Wait just a moment while we look up previous interview records...</li>
    }
    <li>Open up a <a href={codestitchUrl} target="_blank">Codestitch</a> pad and paste the URL below.</li>
    <li>Schedule a Zoom call named <i>{candidateName || 'FIRSTNAME LASTNAME'} - {currentDate}</i> and paste the join link below.</li>
    <li>Go to <a href={tlkio} target="_blank">the tlk.io link</a> and conduct the interview using the script snippets below.</li>
    <li>Fill out the <a href={tiDecisionsUrl} target="_blank">Technical Interview Decisions Form</a>.</li>
    <li>If you have any questions, reference the <a href={tiWorkflowUrl} target="_blank">TI Workflow</a>.</li>
  </ol>
  );
};

export default Steps;