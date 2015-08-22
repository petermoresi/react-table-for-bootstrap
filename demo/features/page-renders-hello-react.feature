Feature: Make sure starter project says hello

# Go learn about cucumber-js
#
# Write tests that anyone interested in your product
# could understand given enough explaination of the purpose.
#

Background:
  Given that I want to test my project
  And I can write a simple list of specs
  Then I can use cucumber-js to get my tests done

Scenario: Render Hello Page
  Given I have the next super cool application
  Then the render should return:
  """
  <div><button class="btn btn-primary">Randomize</button><table class="table table-hover"><thead><tr><th>Color</th><th>Hex Value</th></tr></thead><tbody><tr><td>ref (#F00)</td><td><span style="padding-top:10px;display:block;background-color:#F00;width:50%;height:3em;"></span></td></tr><tr><td>green (#0F0)</td><td><span style="padding-top:10px;display:block;background-color:#0F0;width:75%;height:3em;"></span></td></tr><tr><td>blue (#00F)</td><td><span style="padding-top:10px;display:block;background-color:#00F;width:100%;height:3em;"></span></td></tr></tbody></table></div>
  """
