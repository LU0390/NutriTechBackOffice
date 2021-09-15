﻿using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NutriTechBackOffice.Services.Planes.Commands;
using NutriTechBackOffice.Services.Planes.Forms;
using NutriTechBackOffice.Services.Planes.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutriTechBackOffice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PlanController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/<PlanController>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<IActionResult> PostAsync([FromBody] InsertPlanForm planForm) 
        {
            return Ok(await _mediator.Send(new InsertPlanCommand(planForm)));
        }

        // GET: api/<PlanController>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public async Task<IActionResult> GetAllPlansAsync() 
        {
            return Ok(await _mediator.Send(new GetAllPlansQuery()));
        
        }
    }
}
