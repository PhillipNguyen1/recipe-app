import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-test",
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
    challengeDescription = "";
    currentChallenge = "";

    constructor() {}

    ngOnInit(): void {}

    onSetChallenge() {
        this.currentChallenge = this.challengeDescription;
    }
}
