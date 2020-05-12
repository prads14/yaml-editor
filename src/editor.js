let YAML_DATA = [];
let sampleData = `-  yamlkey:
name: yaml editor
test: for editors
abilities:
  - yaml writing
  - saving
  - esiting`;

const setEditor = () => {
    let yamlEditor = ace.edit('editor');
    yamlEditor.setTheme("ace/theme/monokai");
    yamlEditor.session.setMode('ace/mode/yaml');
    yamlEditor.setValue(sampleData);
}

const showList = (data) => {
    let list = document.getElementById('yamlList');
    list.innerHTML = '';
    if(data.length > 0) {
        data.map((item, index) => {
            list.innerHTML += `<li class="list-group-item" id=${index} onclick="editYaml(this)">${item.title}</li>`
        })
    }
}

const editYaml = (e) => {
   let element = e.id;
   let data = YAML_DATA[element];
   const titleElement = document.getElementById('file-title');
   let yamlEditor = ace.edit('editor');
   titleElement.value = data.title;
   yamlEditor.setValue(data.content);
   let id = document.getElementById('itemId');
   id.value = element;
   let createBtn = document.getElementById('actionBtn');
   createBtn.innerText = 'Update';
}

const  createYaml = () => {
    const titleElement = document.getElementById('file-title');
    let id = document.getElementById('itemId');
    let yamlEditor = ace.edit('editor');

    let title = titleElement.value;
    let content = yamlEditor.getValue();

    data = { title, content};
    YAML_DATA.push(data);
    titleElement.value = '';
    yamlEditor.setValue('dmiosdm');
    let createBtn = document.getElementById('actionBtn');
    createBtn.innerText = 'Update';
    showList(YAML_DATA);
}


window.onload = async () => {
    await setEditor(); 
}