;(function(){
    "use strict";

    let StringPrototype = String.prototype;

    let match = StringPrototype.match;
    let search = StringPrototype.search;
    let split = StringPrototype.split;
    let replace = StringPrototype.replace;

    StringPrototype.match = function(pattern, data) {
        "use strict";
        if (!pattern || !pattern._rewrapSource) {
            return match.call(this, pattern);
        } else {
            return pattern.match(this, data);
        }
    };

    StringPrototype.search = function(pattern) {
        "use strict";
        if (!pattern || !pattern._rewrapSource) {
            return search.call(this, pattern);
        } else {
            return pattern.search(this, data);
        }
    };

    StringPrototype.split = function(pattern) {
        "use strict";
        if (!pattern || !pattern._rewrapSource) {
            return split.call(this, pattern);
        } else {
            return pattern.split(this, data);
        }
    };


    StringPrototype.replace = function(pattern, item) {
        "use strict";
        if (!pattern || !pattern._rewrapSource) {
            return replace.call(this, pattern, item);
        } else {
            return pattern.replace(this, item);
        }
    };

})();
