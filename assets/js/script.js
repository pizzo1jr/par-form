const allowedCopyElements = ["INPUT", "TEXTAREA"];

async function copy(formElementId) {
  var form = document.getElementById(formElementId);
  await copyToClipboard([form]);
}

async function copyAll() {
  var forms = document.getElementsByTagName("form");
  await copyToClipboard([...forms]);
}

async function copyToClipboard(forms) {
  let formStringArray = [];
  for (let index = 0; index < forms.length; index++) {
    const result = convertFormToTextArray(forms[index]); // Ex: ['Property Hub', 'Seller Mismatch: ob9qb', 'Property Type: 2cma6h', 'Last Date of Sale: 2b43y', 'Additional Notes: s3q2j']
    if (result.length === 0) continue;

    if (index < forms.length - 1)
      result[result.length - 1] = `${result[result.length - 1]}\n`;
    const resultString = result.join("\n"); // Ex: Property Hub\nSeller Mismatch: ob9qb\nProperty Type: 2cma6h\nLast Date of Sale: 2b43y\nAdditional Notes: s3q2j\n
    formStringArray.push(resultString);
  }

  await writeToClipboard(formStringArray.join("\n"));
}

async function writeToClipboard(data) {
  try {
    await navigator.clipboard.writeText(data);
  } catch (error) {
    console.error("Could not write to clipboard", error);
  }
}

function convertFormToTextArray(form) {
  const output = [];
  const formElements = form.elements;
  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index];
    if (element.value && allowedCopyElements.includes(element.nodeName)) {
      const label = element.labels[0].textContent;
      output.push(`${label} ${element.value}`);
    }
  }
  if (output.length > 0) output.unshift(`${form.name}`);
  return output;
}