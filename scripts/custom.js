$('button:not([type="submit"])').on('click', function (e) {
var $this = $(this);

if (!!$this.attr('data-radiocheck-check')) {
    var el = $this.attr('data-radiocheck-check');
    $(el).radiocheck('check');
} else if (!!$this.attr('data-radiocheck-uncheck')) {
    var el = $this.attr('data-radiocheck-uncheck');
    $(el).radiocheck('uncheck');
} else if (!!$this.attr('data-radiocheck-toggle')) {
    var el = $this.attr('data-radiocheck-toggle');
    $(el).radiocheck('toggle');
} else if (!!$this.attr('data-radiocheck-indeterminate')) {
    var el = $this.attr('data-radiocheck-indeterminate');
    $(el).radiocheck('indeterminate');
} else if (!!$this.attr('data-radiocheck-determinate')) {
    var el = $this.attr('data-radiocheck-determinate');
    $(el).radiocheck('determinate');
} else if (!!$this.attr('data-radiocheck-disable')) {
    var el = $this.attr('data-radiocheck-disable');
    $(el).radiocheck('disable');
} else if (!!$this.attr('data-radiocheck-enable')) {
    var el = $this.attr('data-radiocheck-enable');
    $(el).radiocheck('enable');
} else if (!!$this.attr('data-radiocheck-destroy')) {
    var el = $this.attr('data-radiocheck-destroy');
    $(el).radiocheck('destroy');
} else if (!!$this.attr('data-radiocheck-init')) {
    var el = $this.attr('data-radiocheck-init');
    $(el).radiocheck();
}

e.preventDefault();
});
