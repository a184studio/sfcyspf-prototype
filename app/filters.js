module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  // filters.getPronoun = function(data) {
  //   if (data['who-is-caller'] === 'Citizen') {
  //     return 'Your';
  //   }
  //   if (data['who-is-caller'] === 'Corporate or Personal Acting Body') {
  //     return 'Their';
  //   }
  //   return 'pronoun';
  // }

  filters.getPronounSingle = function(data) {
    if (data['who-is-caller'] === 'Citizen') {
      return 'You';
    }
    if (data['who-is-caller'] === 'Corporate or Personal Acting Body') {
      return 'They';
    }
    return 'pronoun';
  }

  filters.getPronoun = function(data) {
    if (data['start-work'] === 'Telephone') {
      return 'Your';
    }
    if (data['start-work'] === 'Paper') {
      return 'Their';
    }
    return 'pronoun';
  }


  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
