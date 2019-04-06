// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  likeExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "PUT"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .html(example.text + "<br/>" + example.description)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id,
          "data-text": example.text,
          "data-description": example.description,
          "data-like": example.like
        })
        .append($a);

      var $deleteButton = $("<delete-button>")
        .addClass("btn btn-danger float-right delete")
        .text("x");
      $li.append($deleteButton);

      var $incrementButton = $("<increment-button>")
        .addClass("btn btn-warning float-right counter")
        .text(example.like);
      $li.append($incrementButton);

      var $likeButton = $("<like-button>")
        .addClass("btn btn-info float-right like")
        .html("&#x1F44D;");
      $li.append($likeButton);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
    //$exampleList.sort();
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

var handleLikeBtnClick = function () {
  var idToLike = $(this)
    .parent()
    .attr("data-id");
  API.likeExample(idToLike);

  apiLikes();
};

var apiLikes = function () {

  var idToLike2 = $(this)
    .parent()
    .attr("data-like");

  API.getExamples(idToLike2);

  refreshExamples();
}

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".like", handleLikeBtnClick);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


