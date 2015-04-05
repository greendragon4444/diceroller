// die starts at 0
Session.setDefault('die', 0);

Template.dicestage.helpers({
    die: function () {
        return Session.get('die');
    }
});

Template.rollbutton.events({
    'click button': function () {
        var die = Math.floor((Math.random() * 20) + 1)
        Session.set('die', die);
    }
});
