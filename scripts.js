function mfSelectOPerate(id) {
    let selectElem = document.getElementById(id);

    document.getElementsByClassName('mfSelectDiv')[0].style.display = 'block';
    let options = selectElem.getElementsByTagName('option');
    document.getElementById('selectedmfSelect').innerHTML = selectElem.id;
    let optionSelect = document.getElementsByClassName('optionsmfSelect')[0];
    optionSelect.innerHTML = '';
    for (let i = 0; i < options.length; i++) {
        var option = options[i].value;
        var checked = options[i].selected ? 'checked' : '';
        var elem = `<label>${option} <input type="checkbox" value="${option}" ${checked}></label>`;
        optionSelect.insertAdjacentHTML('beforeend', elem);
    }
}

function closemfSelect() {
    document.getElementsByClassName('mfSelectDiv')[0].style.display = 'none';
}

function mfSelctOkay() {
    let os = document.getElementsByClassName('optionsmfSelect')[0].getElementsByTagName('input');
    let targetId = document.getElementById('selectedmfSelect').innerHTML;
    let selectElement = document.getElementById(targetId);
    if (selectElement) {
        for (let i = 0; i < selectElement.options.length; i++) {
            selectElement.options[i].selected = false;
        }
        for (let i = 0; i < os.length; i++) {
            if (os[i].checked) {
                for (let j = 0; j < selectElement.options.length; j++) {
                    if (selectElement.options[j].value === os[i].value) {
                        selectElement.options[j].selected = true;
                    }
                }
            }
        }
    }
    closemfSelect();
}

document.addEventListener('DOMContentLoaded', function () {
    var style = `
        .mfSelectDiv {
            position: fixed;
            top: 0;
            display: none;
            background: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100vh;
            padding: 0;
            margin: 0;
            padding-top: 50px;
        }
        .mfSelectDiv .mfSelectContainer {
            max-width: 500px;
            overflow: auto;
            width: 90%;
            height: 100vh;
            max-height: 800px;
            background-color: white;
            border-radius: 20px;
            padding: 20px 10px;
            margin: auto;
            position: relative;
            box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.5);
        }
        .mfSelectDiv .mfSelectContainer span {
            color: red;
            position: absolute;
            top: 0;
            right: 20px;
            font-weight: bolder;
            cursor: pointer;
            font-size: 30px;
        }
        .mfSelectDiv .mfSelectContainer span:hover {
            text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
        }
        .mfSelectDiv .mfSelectContainer .HeadermfSelect {
            text-align: center;
            color: rgb(0, 153, 255);
            font-size: 25px;
        }
        .mfSelectDiv .mfSelectContainer .optionsmfSelect {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
        }
        .mfSelectDiv .mfSelectContainer .optionsmfSelect label {
            background: #eeee;
            cursor: pointer;
            font-size: 18px;
            transition: 0.3s;
            padding: 0px 20px;
        }
        .mfSelectDiv .mfSelectContainer .optionsmfSelect label:hover {
            background: #c9c6c6;
        }
        .mfSelectDiv .mfSelectContainer .optionsmfSelect label input {
            margin-left: 50px;
            width: 60px;
            height: 20px;
            float: right;
        }
        .mfSelectDiv .mfSelectContainer button {
            width: 150px;
            border-radius: 5px;
            height: 40px;
            border: 0px;
            background: rgb(0, 153, 255);
            color: #eee;
            font-size: 20px;
            float: right;
            cursor: pointer;
            transition: 0.3s;
        }
        .mfSelectDiv .mfSelectContainer button:hover {
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }`;

    var styleElem = document.createElement('style');
    styleElem.innerHTML = style;
    document.head.appendChild(styleElem);

    var elem = `<div class="mfSelectDiv">
        <span id="selectedmfSelect" style="display:none;"></span>
        <div class="mfSelectContainer">
          <span onclick="closemfSelect()">&times;</span>
          <div class="HeadermfSelect"><label>Select Branches</label></div>
          <div class="optionsmfSelect"></div>
          <button onclick="mfSelctOkay()">Okay</button>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', elem);

    if (typeof mfSelectData !== 'undefined') {
        mfSelectData.forEach(element => {
            let Select = document.getElementById(element);
            if (Select) {
                Select.style.pointerEvents = 'none';
                Select.style.background = '#f9f9f9';
                Select.style.color = '#555';
            }
        });
    }
});

// ✅ Expose functions globally for HTML onclick support
window.mfSelectOPerate = mfSelectOPerate;
window.closemfSelect = closemfSelect;
window.mfSelctOkay = mfSelctOkay;
