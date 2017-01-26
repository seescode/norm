var stuff = {
  "id": "46427545-71c8-4382-98d8-fb05e7246403",
  "questions": [
    {
      "id": "84cd3d21-1d52-4227-99c6-6ccbe61b4d43",
      "path": "/api/v1/item/mc15q4899",
      "system": "content",
      "content": {
        "kaplan-type": "question",
        "content-item-name": "mc15q4899",
        "interaction-type": "multiple-choice",
        "uuid": "84cd3d21-1d52-4227-99c6-6ccbe61b4d43",
        "prompt": "<p>The enzyme triose-phosphate isomerase (TIM) catalyzes the reaction below, one of the steps in glycolysis: </p> <p>GAP <b>⇋</b> DHAP </p> <p>At physiological conditions, <i>K</i><sub>eq</sub> for this reaction is 22.0. In rat liver, however, the [DHAP] to [GAP] ratio is approximately 10. Which of the following is the most plausible explanation for this discrepancy? </p>",
        "answers": [
          {
            "kaplan-type": "answer-choice",
            "content-item-name": "mc15q4899-choice-1",
            "correct": "yes",
            "uuid": "cbde97fb-df37-48e2-95be-326b90f337cc",
            "content": "Other reactions deplete the cell’s supply of DHAP."
          },
          {
            "kaplan-type": "answer-choice",
            "content-item-name": "mc15q4899-choice-2",
            "uuid": "953ca1fb-8d33-4133-9618-b1f1502047f9",
            "content": "Other reactions deplete the cell’s supply of GAP."
          },
          {
            "kaplan-type": "answer-choice",
            "content-item-name": "mc15q4899-choice-3",
            "uuid": "b79eea9c-ca32-429b-a017-a9cb154f0171",
            "content": "Rat liver cells produce less TIM than do other cells."
          },
          {
            "kaplan-type": "answer-choice",
            "content-item-name": "mc15q4899-choice-4",
            "uuid": "4845fabe-a237-401c-a5cb-1b0acc66da73",
            "content": "Rat liver cells produce more TIM than do other cells."
          }
        ],
        "explanation": {
          "uuid": "b54fe85d-6aa0-4aaf-b582-434e21451907",
          "feedback": {
            "uuid": "35b2bbcb-0951-4e45-8afb-91f03afceafd",
            "content": "<p>The answer should explain the reason for the rat’s unusual concentration ratio: namely, why is it that in rat liver cells, [DHAP]/[GAP] is less than the normal value for <i>K</i><sub>eq</sub>? This means that there is either less DHAP or more GAP present in the cell, than would be expected at equilibrium. The right answer should be one that reflects one of those two possibilities,<b> choice (A)</b> fits the bill. </p>"
          }
        }
      }
    }
  ]
};

module.exports = stuff;