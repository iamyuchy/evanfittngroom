var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"%22selected%22": function() { return "selected" },
			"%22init%22": function() { return "init" },
			"%22initcat%22": function() { return "initcat" },
			"%22equalTo%22": function() { return "equalTo" },
			"%22select%22": function() { return "select" }
		}
	};
})(ls || (ls = {}));