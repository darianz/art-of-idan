import { trigger, state, style } from '@angular/animations';

export let CoverImageState = trigger('CoverImageState', [
    state('show', style({
      opacity: 1
    })),

    state('hide', style({
      opacity: 0
    })),

  ]);
