{**
 * templates/management/tools/statistics.tpl
 *
 * Copyright (c) 2013 Simon Fraser University Library
 * Copyright (c) 2003-2013 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * Display the statistics & reporting page.
 *
 *}
 {strip}
{assign var="pageTitle" value="manager.statistics"}
{include file="common/header.tpl"}
{/strip}

<br/>


<div class="separator">&nbsp;</div>

<br/>

<div id="reports">
	<h3>{translate key="manager.statistics.reports"}</h3>
	<p>{translate key="manager.statistics.reports.description"}</p>
	
	<ul class="plain">
	{foreach from=$reportPlugins key=key item=plugin}
		<li>&#187; <a href="{url op="tools" path="report" pluginName=$plugin->getName()|escape}">{$plugin->getDisplayName()|escape}</a></li>
	{/foreach}
	</ul>
	
	<p><a href="{url op="tools" path="reportGenerator"}">{translate key="manager.statistics.reports.generateReport"}</a></p>	
</div>
{include file="common/footer.tpl"}