<script lang="ts">

  export let message: string; 
  export let title: string;

</script>
  
  <div class="banner">
    <div class="siteTitle">
			{title}
	  </div>
    <div class="classificationBanner s4-notdlg">
      
        {message}
      
    </div>
  </div>


<style>
  .banner{
		box-sizing: border-box;
		display: flex; 
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		border: none;
    padding-bottom: 5px;
	}
	.siteTitle{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: rgba(	239, 239, 239, .3); 
		color: black;
		font-size: 16; 
		font-family: Tahoma;
		flex-grow: 1;
		min-width:250px;
		height: 20px;
		margin: 0; 
		border: 0;
		font-weight: bold;
		text-align: center;
	}
  .classificationBanner.s4-notdlg {
    flex-grow: 5;
    background: darkgreen;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    height: 20px;
    min-width: 400px;
    border: none;
    
  }

</style>