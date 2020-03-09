import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

class BillCreatorManager {
  private static Label = "bill-creator";

  private hostDOM: HTMLDivElement | null = null;

  private getHostNode() {
    if (this.hostDOM) {
      return this.hostDOM;
    }

    const node = document.createElement("div");
    node.id = BillCreatorManager.Label;

    this.hostDOM = node;
    document.body.append(this.hostDOM);
    return this.hostDOM;
  }

  public open() {
    const hostDOM = this.getHostNode();
    render(<div></div>, hostDOM);
  }

  private onRemove() {
    unmountComponentAtNode(this.getHostNode());
  }
}

export const BillCreator = new BillCreatorManager();
