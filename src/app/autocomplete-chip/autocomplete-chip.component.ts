import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

/**
 *
 * @author Juan Aguilar
 * @version 1.0.0, Wed Aug 9 2017
 * @since 0.0.1
 * Copyright (c) 2017 Fundación Ayesa
 */

@Component({
  selector: 'app-autocomplete-chip',
  templateUrl: './autocomplete-chip.component.html',
  styleUrls: ['./autocomplete-chip.component.css']
})
export class AutocompleteChipComponent implements OnInit {

  @Input() options: string[];
  @Input() chipsAdded: string[] = [];

  chipsActions = new EventEmitter<string | MaterializeAction>();
  autocompleteInit = {
    data: [],
    autocompleteOptions: {
      data: {},
      limit: Infinity,
      minLength: 1
    }
  };

  ngOnInit() {
    if (!this.options) {
      this.options = [];
    }

    if (!this.chipsAdded) {
      this.chipsAdded = [];
    }

    this.autocompleteInit.data = this.getPopulation(this.chipsAdded);
    this.autocompleteInit.autocompleteOptions.data = this.getOptionsConfig();
  }

  add(tag) {

    // Only valid options are added
    if (this.optionIsValid(tag)) {
      this.chipsAdded.push(tag);
    }

    this.populate();
  }

  delete(tag) {
    for (let idx = 0; idx < this.chipsAdded.length; idx++) {
      if (this.chipsAdded[idx] === tag) {
        this.chipsAdded.splice(idx, 1);
        break;
      }
    }

    this.populate();
  }

  // Check if user is trying to add valid chips among valid possibilities
  optionIsValid(tag: string) {
    for (const value of this.options) {
      if (tag === value) {
        return true;
      }
    }
    return false;
  }

  getPopulation(chips) {
    const newData = [];
    for (const tagElem of chips) {
      if (this.optionIsValid(tagElem)) {
        newData.push({ tag: tagElem });
      }
    }

    return newData;
  }

  populate() {
    // Reloading model for material chip component list of chips.
    const newChips = {
      data: this.getPopulation(this.chipsAdded),
      autocompleteOptions: { data: this.getOptionsConfig(), limit: Infinity, minLength: 1 }
    };
    this.chipsActions.emit({ action: 'material_chip', params: [newChips] });
  }

  getOptionsConfig() {
    // Building config to populate with current model (options)
    // null value means 'no-preview-image'
    const config = {};
    for (const option of this.options) {
      config[option] = null;
    }

    return config;

  }

}
