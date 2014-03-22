module.exports = function(list) {

    // Add handlers
    list.handlers.filterStart = list.handlers.filterStart || [];
    list.handlers.filterComplete = list.handlers.filterComplete || [];

    return function(filterFunction) {
        list.trigger('filterStart');
        list.i = 1; // Reset paging
        list.reset.filter();
        if (filterFunction === undefined) {
            list.filtered = false;
        } else {
            list.filtered = true;
            var is = list.items;
            for (var i = 0, il = is.length; i < il; i++) {
                var item = is[i];
                if (filterFunction(item)) {
                    item.filtered = true;
                } else {
                    item.filtered = false;
                }
            }
        }
        list.update();
        list.trigger('filterComplete');
        return list.visibleItems;
    };
};


$(document).ready(function() {
    $(".title-text-wrapper").dotdotdot({
        ellipsis    : '... ',
        /*  How to cut off the text/html: 'word'/'letter'/'children' */
        wrap        : 'leter',
        /*  Wrap-option fallback to 'letter' for long words */
        fallbackToLetter: true,
        /*  jQuery-selector for the element to keep and put after the ellipsis. */
        after       : null,
        /*  Whether to update the ellipsis: true/'window' */
        watch       : false,
        /*  Optionally set a max-height, if null, the height will be measured. */
        height      : 40,
        /*  Deviation for the height-option. */
        tolerance   : 0,
        /*  Callback function that is fired after the ellipsis is added,
        receives two parameters: isTruncated(boolean), orgContent(string). */
        callback    : function( isTruncated, orgContent ) {},
        lastCharacter   : {
            /*  Remove these characters from the end of the truncated text. */
            remove      : [ ' ', ',', ';', '.', '!', '?' ],
            /*  Don't add an ellipsis if this array contains 
            the last character of the truncated text. */
            noEllipsis  : []
        }
    });

    $(".description-text-wrapper").dotdotdot({
        ellipsis    : '... ',
        wrap        : 'word',
        fallbackToLetter: true,
        after       : null,
        watch       : false,
        height      : 50,
        tolerance   : 0,
        callback    : function( isTruncated, orgContent ) {},
        lastCharacter   : {
            remove      : [ ' ', ',', ';', '.', '!', '?' ],
            noEllipsis  : []
        }
    });

    $(".status-text-wrapper").dotdotdot({
        ellipsis    : '',
        wrap        : 'letter',
        fallbackToLetter: true,
        after       : null,
        watch       : false,
        height      : 30,
        tolerance   : 0,
        callback    : function( isTruncated, orgContent ) {},
        lastCharacter   : {
            remove      : [ ' ', ',', ';', '.', '!', '?' ],
            noEllipsis  : []
        }
    });

    $(".owner-text-wrapper").dotdotdot({
        ellipsis    : '... ',
        wrap        : 'word',
        fallbackToLetter: true,
        after       : null,
        watch       : false,
        height      : 50,
        tolerance   : 0,
        callback    : function( isTruncated, orgContent ) {},
        lastCharacter   : {
            remove      : [ ' ', ',', ';', '.', '!', '?' ],
            noEllipsis  : []
        }
    });
